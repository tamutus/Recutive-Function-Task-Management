import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereUniqueInputSchema } from './ProjectTemplateWhereUniqueInputSchema';
import { ProjectTemplateCreateWithoutImplementationsInputSchema } from './ProjectTemplateCreateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema';

export const ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema: z.ZodType<Prisma.ProjectTemplateCreateOrConnectWithoutImplementationsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema) ]),
}).strict();

export default ProjectTemplateCreateOrConnectWithoutImplementationsInputSchema;
