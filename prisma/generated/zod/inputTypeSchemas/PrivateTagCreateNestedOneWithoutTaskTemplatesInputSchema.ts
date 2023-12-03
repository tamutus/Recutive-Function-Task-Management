import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutTaskTemplatesInputSchema } from './PrivateTagCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema } from './PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema';
import { PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema } from './PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutTaskTemplatesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutTaskTemplatesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutTaskTemplatesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutTaskTemplatesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutTaskTemplatesInputSchema;
