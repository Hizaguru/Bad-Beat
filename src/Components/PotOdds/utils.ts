export const calculatePotOdds = (potSize: number, callSize: number): number => {
    if (potSize > 0 && callSize > 0) {
      return potSize / (potSize + callSize);
    }
    return 0;
  };

  