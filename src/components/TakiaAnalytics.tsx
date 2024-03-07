
import { Analytics } from '@vercel/analytics/react';
import { ReactNode, useCallback } from 'react';
import { beforeSend } from '../lib/actions';

const TakiaAnalytics = ({ children }: { children: ReactNode }) => {

  return (
    <div>
      <Analytics
        beforeSend={beforeSend} />
      {children}
    </div>
  );
}

export default TakiaAnalytics;