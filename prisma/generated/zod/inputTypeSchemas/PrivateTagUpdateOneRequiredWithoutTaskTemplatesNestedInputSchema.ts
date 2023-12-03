import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutTaskTemplatesInputSchema } from './PrivateTagCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema } from './PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema';
import { PrivateTagUpsertWithoutTaskTemplatesInputSchema } from './PrivateTagUpsertWithoutTaskTemplatesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema';
import { PrivateTagUpdateWithoutTaskTemplatesInputSchema } from './PrivateTagUpdateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema';

export const PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUpdateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutTaskTemplatesInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutTaskTemplatesNestedInputSchema;
