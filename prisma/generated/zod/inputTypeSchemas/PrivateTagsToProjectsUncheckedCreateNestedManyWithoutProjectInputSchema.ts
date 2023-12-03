import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema } from './PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema';
import { PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema } from './PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';

export const PrivateTagsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsUncheckedCreateNestedManyWithoutProjectInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsCreateWithoutProjectInputSchema).array(),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema),z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectsCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectsUncheckedCreateNestedManyWithoutProjectInputSchema;
