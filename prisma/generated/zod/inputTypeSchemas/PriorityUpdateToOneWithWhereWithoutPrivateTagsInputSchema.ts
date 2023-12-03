import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';
import { PriorityUpdateWithoutPrivateTagsInputSchema } from './PriorityUpdateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedUpdateWithoutPrivateTagsInputSchema } from './PriorityUncheckedUpdateWithoutPrivateTagsInputSchema';

export const PriorityUpdateToOneWithWhereWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PriorityUpdateToOneWithWhereWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => PriorityWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PriorityUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default PriorityUpdateToOneWithWhereWithoutPrivateTagsInputSchema;
