import React from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import './styles.css';

const kpis = [
  { label: 'Pipelines Running', value: '24', delta: '+12%' },
  { label: 'Rows Processed', value: '8.4M', delta: '+19%' },
  { label: 'Reports Generated', value: '312', delta: '+9%' },
  { label: 'Data Quality Score', value: '99.2%', delta: '+1.4%' }
];

const workflows = [
  { name: 'Ingest CSV + Excel', status: 'Completed', time: '02m 14s' },
  { name: 'Schema Validation', status: 'Running', time: '00m 39s' },
  { name: 'Anomaly Detection', status: 'Running', time: '01m 08s' },
  { name: 'Executive PDF Export', status: 'Queued', time: 'Pending' }
];

function GitHubIcon() {
  return (
    <svg aria-hidden='true' viewBox='0 0 24 24' width='18' height='18' fill='currentColor'>
      <path d='M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.62-4.04-1.62a3.18 3.18 0 0 0-1.34-1.76c-1.09-.75.08-.74.08-.74a2.53 2.53 0 0 1 1.85 1.24 2.57 2.57 0 0 0 3.51 1 2.56 2.56 0 0 1 .76-1.61c-2.67-.3-5.47-1.34-5.47-5.94a4.66 4.66 0 0 1 1.24-3.23 4.33 4.33 0 0 1 .12-3.18s1.01-.32 3.3 1.23a11.42 11.42 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.49 1.05.53 2.25.12 3.18a4.66 4.66 0 0 1 1.24 3.23c0 4.61-2.8 5.64-5.48 5.94a2.87 2.87 0 0 1 .82 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z' />
    </svg>
  );
}

function App() {
  return (
    <div className='app'>
      <section className='hero'>
        <motion.p className='eyebrow' initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          Data Reporting & Automation Toolkit
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          Enterprise data operations, automated end-to-end.
        </motion.h1>
        <motion.p className='hero-copy' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }}>
          Ingestion, cleaning, ETL orchestration, AI-assisted insights, and executive reporting in one premium analytics platform demo.
        </motion.p>
      </section>

      <section className='kpi-grid'>
        {kpis.map((item, i) => (
          <motion.article key={item.label} className='card' initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
            <p className='muted'>{item.label}</p>
            <h3>{item.value}</h3>
            <span className='delta'>{item.delta}</span>
          </motion.article>
        ))}
      </section>

      <section className='panel-grid'>
        <motion.article className='panel' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2>Workflow Monitor</h2>
          <ul>
            {workflows.map((wf) => (
              <li key={wf.name}>
                <div>
                  <strong>{wf.name}</strong>
                  <span>{wf.time}</span>
                </div>
                <em>{wf.status}</em>
              </li>
            ))}
          </ul>
        </motion.article>

        <motion.article className='panel' initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h2>Pipeline Signal</h2>
          <div className='bars'>
            {[38, 58, 44, 72, 66, 82, 74, 90].map((n, idx) => (
              <motion.span key={idx} style={{ height: `${n}%` }} initial={{ height: 0 }} animate={{ height: `${n}%` }} transition={{ delay: 0.2 + idx * 0.06, duration: 0.4 }} />
            ))}
          </div>
          <p className='muted'>Live throughput trend across ingestion, transform, and export nodes.</p>
        </motion.article>
      </section>

      <footer className='footer'>
        <p>© 2023 Victor Linam.</p>
        <p>For demonstration purposes only.</p>
        <a href='https://github.com/Victorlinam/dataops-toolkit' target='_blank' rel='noreferrer' className='source-link'>
          <GitHubIcon />
          <span>View Source Code</span>
        </a>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
