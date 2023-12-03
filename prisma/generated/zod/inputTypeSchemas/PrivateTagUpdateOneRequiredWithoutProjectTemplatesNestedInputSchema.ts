import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutProjectTemplatesInputSchema } from './PrivateTagCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema';
import { PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema } from './PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema';
import { PrivateTagUpsertWithoutProjectTemplatesInputSchema } from './PrivateTagUpsertWithoutProjectTemplatesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema';
import { PrivateTagUpdateWithoutProjectTemplatesInputSchema } from './PrivateTagUpdateWithoutProjectTemplatesInputSchema';
import { PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema } from './PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema';

export const PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutProjectTemplatesInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutProjectTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUpdateWithoutProjectTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutProjectTemplatesInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutProjectTemplatesNestedInputSchema;
