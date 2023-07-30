import pandas as pd

def summary_report(path: str) -> dict:
    df = pd.read_csv(path)
    return {"rows": len(df), "columns": list(df.columns), "nulls": int(df.isna().sum().sum())}
