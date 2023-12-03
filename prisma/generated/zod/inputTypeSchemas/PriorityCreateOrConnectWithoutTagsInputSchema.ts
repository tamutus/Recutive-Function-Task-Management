import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutTagsInputSchema } from './PriorityCreateWithoutTagsInputSchema';
import { PriorityUncheckedCreateWithoutTagsInputSchema } from './PriorityUncheckedCreateWithoutTagsInputSchema';

export const PriorityCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutTagsInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTagsInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutTagsInputSchema;
