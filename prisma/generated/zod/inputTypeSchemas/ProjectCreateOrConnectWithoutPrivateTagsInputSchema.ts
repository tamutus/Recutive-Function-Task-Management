import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';
import { ProjectCreateWithoutPrivateTagsInputSchema } from './ProjectCreateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectUncheckedCreateWithoutPrivateTagsInputSchema';

export const ProjectCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => ProjectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default ProjectCreateOrConnectWithoutPrivateTagsInputSchema;
