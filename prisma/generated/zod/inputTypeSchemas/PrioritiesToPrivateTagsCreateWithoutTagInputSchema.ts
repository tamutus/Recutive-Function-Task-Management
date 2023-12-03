import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateNestedOneWithoutPrivateTagsInputSchema } from './PriorityCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrioritiesToPrivateTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.PrioritiesToPrivateTagsCreateWithoutTagInput> = z.object({
  notes: z.string().optional().nullable(),
  priority: z.lazy(() => PriorityCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrioritiesToPrivateTagsCreateWithoutTagInputSchema;
