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
<<<<<<< HEAD
  params: Promise<{ projectId: Id<"projects"> }>;
}) => {
  const { projectId } = await params;

  return <ProjectIdLayout projectId={projectId}>{children}</ProjectIdLayout>;
};

=======
  params: Promise<{ projectId: string }>
}) => {
  const { projectId } = await params;

  return (
    <ProjectIdLayout
      projectId={projectId as Id<"projects">}
    >
      {children}
    </ProjectIdLayout>
  );
}
 
>>>>>>> 4cf8ccb5b99921aaeed08c1f4eb9081c98e8fd6d
export default Layout;
