import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsCreateWithoutPriorityInputSchema } from './PrioritiesToTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';

export const PrioritiesToTagsUncheckedCreateNestedManyWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsUncheckedCreateNestedManyWithoutPriorityInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToTagsCreateManyPriorityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToTagsUncheckedCreateNestedManyWithoutPriorityInputSchema;
