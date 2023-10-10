import { FC } from "react";
import { Tabs, TabsList, TabsTrigger } from "./ui/Tabs";

const DocumentationTabs: FC = ()=>{
    return <Tabs defaultValue="nodejs">
        <TabsList>
            <TabsTrigger value="nodejs">NodeJS</TabsTrigger>
            <TabsTrigger value="python">Python</TabsTrigger>
        </TabsList>
    </Tabs>
}
export default DocumentationTabs;