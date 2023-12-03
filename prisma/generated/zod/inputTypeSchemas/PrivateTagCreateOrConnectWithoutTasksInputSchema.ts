import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutTasksInputSchema } from './PrivateTagCreateWithoutTasksInputSchema';
import { PrivateTagUncheckedCreateWithoutTasksInputSchema } from './PrivateTagUncheckedCreateWithoutTasksInputSchema';

export const PrivateTagCreateOrConnectWithoutTasksInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutTasksInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTasksInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutTasksInputSchema;
