import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagCreateWithoutPrioritiesInputSchema } from './PrivateTagCreateWithoutPrioritiesInputSchema';
import { PrivateTagUncheckedCreateWithoutPrioritiesInputSchema } from './PrivateTagUncheckedCreateWithoutPrioritiesInputSchema';

export const PrivateTagCreateOrConnectWithoutPrioritiesInputSchema: z.ZodType<Prisma.PrivateTagCreateOrConnectWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPrioritiesInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPrioritiesInputSchema) ]),
}).strict();

export default PrivateTagCreateOrConnectWithoutPrioritiesInputSchema;
