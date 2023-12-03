import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsCreateWithoutTagInputSchema } from './PrioritiesToTagsCreateWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutTagInputSchema';
import { PrioritiesToTagsCreateOrConnectWithoutTagInputSchema } from './PrioritiesToTagsCreateOrConnectWithoutTagInputSchema';
import { PrioritiesToTagsCreateManyTagInputEnvelopeSchema } from './PrioritiesToTagsCreateManyTagInputEnvelopeSchema';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';

export const PrioritiesToTagsCreateNestedManyWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateNestedManyWithoutTagInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsCreateWithoutTagInputSchema).array(),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutTagInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutTagInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTagsCreateManyTagInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTagsCreateNestedManyWithoutTagInputSchema;
