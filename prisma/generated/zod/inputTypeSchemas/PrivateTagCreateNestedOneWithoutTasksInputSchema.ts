import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutTasksInputSchema } from './PrivateTagCreateWithoutTasksInputSchema';
import { PrivateTagUncheckedCreateWithoutTasksInputSchema } from './PrivateTagUncheckedCreateWithoutTasksInputSchema';
import { PrivateTagCreateOrConnectWithoutTasksInputSchema } from './PrivateTagCreateOrConnectWithoutTasksInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutTasksInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutTasksInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutTasksInputSchema;
