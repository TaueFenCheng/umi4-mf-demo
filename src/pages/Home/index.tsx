import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import { PageContainer } from '@ant-design/pro-components';
import { rawMfImport, safeMfImport, useModel } from '@umijs/max';
import React from 'react';
import styles from './index.less';

const RemoteCounter = React.lazy(() => {
  return safeMfImport('remoteApp/Button', { default: () => 'Fallback' });
});

const RemoteCounter2 = React.lazy(() => {
  return rawMfImport({
    entry: 'http://localhost:8010/remoteEntry.js',
    moduleName: 'Button',
    remoteName: 'remoteApp',
  });
});

// const RemoteCounter = React.lazy(() => {
//   // @ts-ignore
//   return import('remoteCounter/Counter');
// });

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={styles.container}>
        <Guide name={trim(name)} />
        <RemoteCounter></RemoteCounter>
        <RemoteCounter2></RemoteCounter2>
      </div>
    </PageContainer>
  );
};

export default HomePage;
