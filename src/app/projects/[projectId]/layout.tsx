import { ProjectIdLayout } from "@/features/projects/components/project-id-layout";

import { Id } from "../../../../convex/_generated/dataModel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project | Nucleus - IDE",
  description: "An AI web based IDE",
  icons: {
    icon: "/logo.svg",
  },
  creator: "Nucleus",
  publisher: "Nucleus",
};

const Layout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ projectId: Id<"projects"> }>;
}) => {
  const { projectId } = await params;

  return <ProjectIdLayout projectId={projectId}>{children}</ProjectIdLayout>;
};

export default Layout;
