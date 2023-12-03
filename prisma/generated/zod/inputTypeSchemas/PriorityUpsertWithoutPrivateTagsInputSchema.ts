import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityUpdateWithoutPrivateTagsInputSchema } from './PriorityUpdateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedUpdateWithoutPrivateTagsInputSchema } from './PriorityUncheckedUpdateWithoutPrivateTagsInputSchema';
import { PriorityCreateWithoutPrivateTagsInputSchema } from './PriorityCreateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedCreateWithoutPrivateTagsInputSchema } from './PriorityUncheckedCreateWithoutPrivateTagsInputSchema';
import { PriorityWhereInputSchema } from './PriorityWhereInputSchema';

export const PriorityUpsertWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PriorityUpsertWithoutPrivateTagsInput> = z.object({
  update: z.union([ z.lazy(() => PriorityUpdateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedUpdateWithoutPrivateTagsInputSchema) ]),
  create: z.union([ z.lazy(() => PriorityCreateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPrivateTagsInputSchema) ]),
  where: z.lazy(() => PriorityWhereInputSchema).optional()
}).strict();

export default PriorityUpsertWithoutPrivateTagsInputSchema;
