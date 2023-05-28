import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import { z } from 'zod';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200 }));
app.use(morgan('combined'));

const authSchema = z.object({ email: z.string().email(), password: z.string().min(8) });

app.get('/health', (_, res) => res.json({ ok: true, timestamp: new Date().toISOString() }));
app.post('/api/auth/login', (req, res) => {
  const parsed = authSchema.safeParse(req.body);
  if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });
  return res.json({ token: 'demo-jwt-token', role: 'ADMIN' });
});

app.get('/api/dashboard/kpis', (_, res) => {
  res.json({ revenue: 184230, processedRows: 2784300, activeWorkflows: 12, anomalyRate: 1.7 });
});

app.get('/api/workflows', (_, res) => {
  res.json({ items: [{ id: 'wf_001', name: 'Nightly Sales ETL', status: 'RUNNING', schedule: '0 2 * * *' }], total: 1 });
});

app.post('/api/ingestion/upload', (_, res) => {
  res.status(202).json({ jobId: `ing_${Date.now()}`, status: 'QUEUED' });
});

const spec = swaggerJsdoc({ definition: { openapi: '3.0.0', info: { title: 'DataOps API', version: '1.0.0' } }, apis: [] });
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(spec));

app.use((err: Error, _: express.Request, res: express.Response, __: express.NextFunction) => {
  res.status(500).json({ error: 'Internal server error', message: err.message });
});

app.listen(process.env.PORT || 4000, () => console.log('API listening on 4000'));
