import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema } from './PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';

export const PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutPriorityInput> = z.object({
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema).array(),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PrioritiesToPrivateTagsCreateManyPriorityInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PrioritiesToPrivateTagsUncheckedCreateNestedManyWithoutPriorityInputSchema;
