import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsCreateWithoutTagInputSchema } from './ProjectsToTagsCreateWithoutTagInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutTagInputSchema } from './ProjectsToTagsUncheckedCreateWithoutTagInputSchema';
import { ProjectsToTagsCreateOrConnectWithoutTagInputSchema } from './ProjectsToTagsCreateOrConnectWithoutTagInputSchema';
import { ProjectsToTagsCreateManyTagInputEnvelopeSchema } from './ProjectsToTagsCreateManyTagInputEnvelopeSchema';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';

export const ProjectsToTagsUncheckedCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => ProjectsToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTagsUncheckedCreateNestedManyWithoutTagInputSchema;
