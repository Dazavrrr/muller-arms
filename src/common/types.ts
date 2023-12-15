import { Metadata, ResolvingMetadata } from "next";

type MetaProps = {
  params: { locale: string; slug?: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type MetaDataFunction = (
  props: MetaProps,
  parent: ResolvingMetadata
) => Promise<Metadata>;
