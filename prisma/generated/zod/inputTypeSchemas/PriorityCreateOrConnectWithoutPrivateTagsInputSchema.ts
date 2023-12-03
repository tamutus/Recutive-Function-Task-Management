import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PriorityWhereUniqueInputSchema } from './PriorityWhereUniqueInputSchema';
import { PriorityCreateWithoutPrivateTagsInputSchema } from './PriorityCreateWithoutPrivateTagsInputSchema';
import { PriorityUncheckedCreateWithoutPrivateTagsInputSchema } from './PriorityUncheckedCreateWithoutPrivateTagsInputSchema';

export const PriorityCreateOrConnectWithoutPrivateTagsInputSchema: z.ZodType<Prisma.PriorityCreateOrConnectWithoutPrivateTagsInput> = z.object({
  where: z.lazy(() => PriorityWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PriorityCreateWithoutPrivateTagsInputSchema),z.lazy(() => PriorityUncheckedCreateWithoutPrivateTagsInputSchema) ]),
}).strict();

export default PriorityCreateOrConnectWithoutPrivateTagsInputSchema;
