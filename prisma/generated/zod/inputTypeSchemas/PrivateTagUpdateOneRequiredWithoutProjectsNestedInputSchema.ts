import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutProjectsInputSchema } from './PrivateTagCreateWithoutProjectsInputSchema';
import { PrivateTagUncheckedCreateWithoutProjectsInputSchema } from './PrivateTagUncheckedCreateWithoutProjectsInputSchema';
import { PrivateTagCreateOrConnectWithoutProjectsInputSchema } from './PrivateTagCreateOrConnectWithoutProjectsInputSchema';
import { PrivateTagUpsertWithoutProjectsInputSchema } from './PrivateTagUpsertWithoutProjectsInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateToOneWithWhereWithoutProjectsInputSchema } from './PrivateTagUpdateToOneWithWhereWithoutProjectsInputSchema';
import { PrivateTagUpdateWithoutProjectsInputSchema } from './PrivateTagUpdateWithoutProjectsInputSchema';
import { PrivateTagUncheckedUpdateWithoutProjectsInputSchema } from './PrivateTagUncheckedUpdateWithoutProjectsInputSchema';

export const PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema: z.ZodType<Prisma.PrivateTagUpdateOneRequiredWithoutProjectsNestedInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutProjectsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutProjectsInputSchema).optional(),
  upsert: z.lazy(() => PrivateTagUpsertWithoutProjectsInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PrivateTagUpdateToOneWithWhereWithoutProjectsInputSchema),z.lazy(() => PrivateTagUpdateWithoutProjectsInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutProjectsInputSchema) ]).optional(),
}).strict();

export default PrivateTagUpdateOneRequiredWithoutProjectsNestedInputSchema;
