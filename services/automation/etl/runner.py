import pandas as pd
from pathlib import Path

def run_etl(input_path: str, output_path: str) -> None:
    df = pd.read_csv(input_path)
    df.columns = [c.strip().lower().replace(' ', '_') for c in df.columns]
    df = df.drop_duplicates().fillna('')
    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    df.to_csv(output_path, index=False)

if __name__ == '__main__':
    run_etl('data/sample.csv', 'out/cleaned.csv')
