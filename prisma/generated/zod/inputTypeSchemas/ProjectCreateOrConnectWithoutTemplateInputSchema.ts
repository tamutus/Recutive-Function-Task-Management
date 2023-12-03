import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutTemplateInputSchema } from './ProjectCreateWithoutTemplateInputSchema';
import { ProjectUncheckedCreateWithoutTemplateInputSchema } from './ProjectUncheckedCreateWithoutTemplateInputSchema';

export const ProjectCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutTemplateInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutTemplateInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutTemplateInputSchema;
