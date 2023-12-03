import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityCreateWithoutPrivateTagsInputSchema } from './PriorityCreateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedCreateWithoutPrivateTagsInputSchema } from './PriorityUncheckedCreateWithoutPrivateTagsInputSchema';
import { PriorityCreateOrConnectWithoutPrivateTagsInputSchema } from './PriorityCreateOrConnectWithoutPrivateTagsInputSchema';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';

export const PriorityCreateNestedOneWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PriorityCreateNestedOneWithoutPrivateTagsInput> = z.object({
  create: z.union([ z.lazy(() => PriorityCreateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPrivateTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PriorityCreateOrConnectWithoutPrivateTagsInputSchema).optional(),
  connect: z.lazy(() => PriorityWhereUniqueInputSchema).optional()
}).strict();

export default PriorityCreateNestedOneWithoutPrivateTagsInputSchema;
