import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutTasksInputSchema } from './PrivateTagCreateWithoutTasksInputSchema';
import { PrivateTagUncheckedCreateWithoutTasksInputSchema } from './PrivateTagUncheckedCreateWithoutTasksInputSchema';
import { PrivateTagCreateOrConnectWithoutTasksInputSchema } from './PrivateTagCreateOrConnectWithoutTasksInputSchema';
import { PrivateTagUpsertWithoutTasksInputSchema } from './PrivateTagUpsertWithoutTasksInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutTasksInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutTasksInputSchema';
import { PrivateTagUpdateWithoutTasksInputSchema } from './PrivateTagUpdateWithoutTasksInputSchema';
import { PrivateTagUncheckedUpdateWithoutTasksInputSchema } from './PrivateTagUncheckedUpdateWithoutTasksInputSchema';

export const PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutTasksNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTasksInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutTasksInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutTasksInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutTasksInputSchema),z.lazy(() => PrivateTagUpdateWithoutTasksInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutTasksInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutTasksNestedInputSchema;
