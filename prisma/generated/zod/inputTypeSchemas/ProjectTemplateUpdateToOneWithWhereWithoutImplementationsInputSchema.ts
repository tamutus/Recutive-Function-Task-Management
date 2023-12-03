import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectTemplateWhereInputSchema } from './ProjectTemplateWhereInputSchema';
import { ProjectTemplateUpdateWithoutImplementationsInputSchema } from './ProjectTemplateUpdateWithoutImplementationsInputSchema';
import { ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema } from './ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema';

export const ProjectTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema: z.ZodType<Prisma.ProjectTemplateUpdateToOneWithWhereWithoutImplementationsInput> = z.object({
  where: z.lazy(() => ProjectTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectTemplateUpdateWithoutImplementationsInputSchema),z.lazy(() => ProjectTemplateUncheckedUpdateWithoutImplementationsInputSchema) ]),
}).strict();

export default ProjectTemplateUpdateToOneWithWhereWithoutImplementationsInputSchema;
