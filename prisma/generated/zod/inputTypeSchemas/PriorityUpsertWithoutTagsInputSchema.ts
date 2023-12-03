import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityUpdateWithoutTagsInputSchema } from './PriorityUpdateWithoutTagsInputSchema';
import { PriorityUncheckedUpdateWithoutTagsInputSchema } from './PriorityUncheckedUpdateWithoutTagsInputSchema';
import { PriorityCreateWithoutTagsInputSchema } from './PriorityCreateWithoutTagsInputSchema';
import { PriorityUncheckedCreateWithoutTagsInputSchema } from './PriorityUncheckedCreateWithoutTagsInputSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityUpsertWithoutTagsInputSchema: z.ZodType<Prisma.PriorityUpsertWithoutTagsInput> = z.object({
  update: z.union([ z.lazy(() => PriorityUpdateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityUpsertWithoutTagsInputSchema;
