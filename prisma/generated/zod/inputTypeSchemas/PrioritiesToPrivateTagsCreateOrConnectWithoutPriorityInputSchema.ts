import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToPrivateTagsWhereUniqueInputSchema } from './PrioritiesToPrivateTagsWhereUniqueInputSchema';
import { PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema';
import { PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema } from './PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema';

export const PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInput> = z.object({
  where: z.lazy(() => PrioritiesToPrivateTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToPrivateTagsCreateWithoutPriorityInputSchema),z.lazy(() => PrioritiesToPrivateTagsUncheckedCreateWithoutPriorityInputSchema) ]),
}).strict();

export default PrioritiesToPrivateTagsCreateOrConnectWithoutPriorityInputSchema;
