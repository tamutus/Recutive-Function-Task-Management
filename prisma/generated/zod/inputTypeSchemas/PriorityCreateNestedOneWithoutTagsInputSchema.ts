import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutTagsInputSchema } from './PriorityCreateWithoutTagsInputSchema';
import { PriorityUncheckedCreateWithoutTagsInputSchema } from './PriorityUncheckedCreateWithoutTagsInputSchema';
import { PriorityCreateOrConnectWithoutTagsInputSchema } from './PriorityCreateOrConnectWithoutTagsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.PriorityCreateNestedOneWithoutTagsInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional()
}).strict();

export default PriorityCreateNestedOneWithoutTagsInputSchema;
