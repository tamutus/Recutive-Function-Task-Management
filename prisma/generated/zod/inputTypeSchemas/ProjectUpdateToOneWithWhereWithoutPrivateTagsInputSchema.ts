import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';
import { ProjectUpdateWithoutPrivateTagsInputSchema } from './ProjectUpdateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedUpdateWithoutPrivateTagsInputSchema } from './ProjectUncheckedUpdateWithoutPrivateTagsInputSchema';

export const ProjectUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => ProjectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ProjectUpdateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default ProjectUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
