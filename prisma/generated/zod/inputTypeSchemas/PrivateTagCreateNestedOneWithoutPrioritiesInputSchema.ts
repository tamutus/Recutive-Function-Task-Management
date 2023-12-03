import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateWithoutPrioritiesInputSchema } from './PrivateTagCreateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrioritiesInputSchema';
import { PrivateTagCreateOrConnectWithoutPrioritiesInputSchema } from './PrivateTagCreateOrConnectWithoutPrioritiesInputSchema';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';

export const PrivateTagCreateNestedOneWithoutPrioritiesInputSchema: z.ZodType<Prisma.PrivateTagCreateNestedOneWithoutPrioritiesInput> = z.object({
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrioritiesInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PrivateTagCreateOrConnectWithoutPrioritiesInputSchema).optional(),
  connect: z.lazy(() => PrivateTagWhereUniqueInputSchema).optional()
}).strict();

export default PrivateTagCreateNestedOneWithoutPrioritiesInputSchema;
