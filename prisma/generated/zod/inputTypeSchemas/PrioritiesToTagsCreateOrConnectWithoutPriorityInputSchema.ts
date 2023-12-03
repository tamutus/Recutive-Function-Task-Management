import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsCreateWithoutPriorityInputSchema } from './PrioritiesToTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateOrConnectWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToTagsCreateOrConnectWithoutPriorityInputSchema;
