import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectUpdateWithoutPrivateTagsInputSchema } from './ProjectUpdateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedUpdateWithoutPrivateTagsInputSchema } from './ProjectUncheckedUpdateWithoutPrivateTagsInputSchema';
import { ProjectCreateWithoutPrivateTagsInputSchema } from './ProjectCreateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectUncheckedCreateWithoutPrivateTagsInputSchema';
import { ProjectWhereInputSchema } from './ProjectWhereInputSchema';

export const ProjectUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => ProjectUpdateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => ProjectWhereInputSchema).optional()
}).strict();

export default ProjectUpsertWithoutPrivateTagsInputSchema;
