import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateUpdateWithoutImplementationsInputSchema } from './ProjectTemplateUpdateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema';
import { ProjectTemplateCreateWithoutImplementationsInputSchema } from './ProjectTemplateCreateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';

export const ProjectTemplateUpsertWithoutImplementationsInputSchema: z.ZodType<Prisma.ProjectTemplateUpsertWithoutImplementationsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectTemplateCreateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedCreateWithoutImplementationsInputSchema) ]),
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional()
}).strict();

export default ProjectTemplateUpsertWithoutImplementationsInputSchema;
