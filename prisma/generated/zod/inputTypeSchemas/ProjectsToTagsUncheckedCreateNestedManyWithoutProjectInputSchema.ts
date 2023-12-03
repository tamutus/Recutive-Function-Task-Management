import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { ProjectsToTagsCreateWithoutProjectInputSchema } from './ProjectsToTagsCreateWithoutProjectInputSchema';
import { ProjectsToTagsUncheckedCreateWithoutProjectInputSchema } from './ProjectsToTagsUncheckedCreateWithoutProjectInputSchema';
import { ProjectsToTagsCreateOrConnectWithoutProjectInputSchema } from './ProjectsToTagsCreateOrConnectWithoutProjectInputSchema';
import { ProjectsToTagsCreateManyProjectInputEnvelopeSchema } from './ProjectsToTagsCreateManyProjectInputEnvelopeSchema';
import { ProjectsToTagsWhereUniqueInputSchema } from './ProjectsToTagsWhereUniqueInputSchema';

export const ProjectsToTagsUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectsToTagsUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => ProjectsToTagsCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsCreateWithoutProjectInputSchema).array(),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectsToTagsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => ProjectsToTagsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectsToTagsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectsToTagsWhereUniqueInputSchema),z.lazy(() => ProjectsToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ProjectsToTagsUncheckedCreateNestedManyWithoutProjectInputSchema;
