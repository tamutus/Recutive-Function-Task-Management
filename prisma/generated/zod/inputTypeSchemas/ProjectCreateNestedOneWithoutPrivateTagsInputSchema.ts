import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectCreateWithoutPrivateTagsInputSchema } from './ProjectCreateWithoutPrivateTagsInputSchema';
import { ProjectUncheckedCreateWithoutPrivateTagsInputSchema } from './ProjectUncheckedCreateWithoutPrivateTagsInputSchema';
import { ProjectCreateOrConnectWithoutPrivateTagsInputSchema } from './ProjectCreateOrConnectWithoutPrivateTagsInputSchema';
import { ProjectWhereUniqueInputSchema } from './ProjectWhereUniqueInputSchema';

export const ProjectCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.ProjectCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => ProjectCreateWithoutPrivateTagsInputSchema),z.lazy(() => ProjectUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ProjectCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => ProjectWhereUniqueInputSchema).optional()
}).strict();

export default ProjectCreateNestedOneWithoutPrivateTagsInputSchema;
