import { CLEAR_ONBOARDING, IClearOnboardingAction } from '../../types';

export const clearOnboarding = (): IClearOnboardingAction => {
  return {
    type: CLEAR_ONBOARDING,
    payload: false,
  };
};

