import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectScalarWhereInputSchema } from './ProjectScalarWhereInputSchema';
import { ProjectUpdateManyMutationInputSchema } from './ProjectUpdateManyMutationInputSchema';
import { ProjectUncheckedUpdateManyWithoutTemplateInputSchema } from './ProjectUncheckedUpdateManyWithoutTemplateInputSchema';

export const ProjectUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.ProjectUpdateManyWithWhereWithoutTemplateInput> = z.object({
  where: z.lazy(() => ProjectScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectUpdateManyMutationInputSchema),z.lazy(() => ProjectUncheckedUpdateManyWithoutTemplateInputSchema) ]),
}).strict();

export default ProjectUpdateManyWithWhereWithoutTemplateInputSchema;
