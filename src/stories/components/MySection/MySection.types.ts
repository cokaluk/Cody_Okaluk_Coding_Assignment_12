import MySectionItem from "../MySectionItem/MySectionItem";

export interface MySectionProps {
 Header: string;
 SectionItems: React.ReactElement<typeof MySectionItem>[];
 disabled?: boolean;
}