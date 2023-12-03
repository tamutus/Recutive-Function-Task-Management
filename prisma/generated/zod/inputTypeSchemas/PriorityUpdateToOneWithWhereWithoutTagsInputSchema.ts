import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { PriorityUpdateWithoutTagsInputSchema } from './PriorityUpdateWithoutTagsInputSchema';
import { PriorityUncheckedUpdateWithoutTagsInputSchema } from './PriorityUncheckedUpdateWithoutTagsInputSchema';

export const PriorityUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.PriorityUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => PriorityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default PriorityUpdateToOneWithWhereWithoutTagsInputSchema;
