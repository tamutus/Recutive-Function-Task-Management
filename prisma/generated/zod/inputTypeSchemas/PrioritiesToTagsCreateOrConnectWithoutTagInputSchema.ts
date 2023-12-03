import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrioritiesToTagsWhereUniqueInputSchema } from './PrioritiesToTagsWhereUniqueInputSchema';
import { PrioritiesToTagsCreateWithoutTagInputSchema } from './PrioritiesToTagsCreateWithoutTagInputSchema';
import { PrioritiesToTagsUncheckedCreateWithoutTagInputSchema } from './PrioritiesToTagsUncheckedCreateWithoutTagInputSchema';

export const PrioritiesToTagsCreateOrConnectWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToTagsCreateOrConnectWithoutTagInput> = z.object({
  where: z.lazy(() => PrioritiesToTagsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrioritiesToTagsCreateWithoutTagInputSchema),z.lazy(() => PrioritiesToTagsUncheckedCreateWithoutTagInputSchema) ]),
}).strict();

export default PrioritiesToTagsCreateOrConnectWithoutTagInputSchema;
