import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagsToProjectsCreateWithoutTagInputSchema } from './PrivateTagsToProjectsCreateWithoutTagInputSchema';
import { PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema } from './PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema';
import { PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema } from './PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema';
import { PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema } from './PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema';
import { PrivateTagsToProjectsWhereUniqueInputSchema } from './PrivateTagsToProjectsWhereUniqueInputSchema';

export const PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagsToProjectsCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsCreateWithoutTagInputSchema).array(),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrivateTagsToProjectsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrivateTagsToProjectsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema),z.lazy(() => PrivateTagsToProjectsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrivateTagsToProjectsCreateNestedManyWithoutTagInputSchema;
