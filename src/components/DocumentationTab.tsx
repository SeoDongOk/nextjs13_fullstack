import { FC } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs';
import SimpleBar from 'simplebar-react';
import Code from './Code';

const DocumentationTabs: FC = () => {
  return (
    <Tabs defaultValue="nodejs">
      <TabsList>
        <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        {/* <SimpleBar></SimpleBar> */}
        {/* <Code/>  */}
      </TabsContent>
      <TabsContent value="python"></TabsContent>
    </Tabs>
  );
};
export default DocumentationTabs;
