import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateWithoutPersonInputSchema } from './PrivateTagUpdateWithoutPersonInputSchema';
import { PrivateTagUncheckedUpdateWithoutPersonInputSchema } from './PrivateTagUncheckedUpdateWithoutPersonInputSchema';
import { PrivateTagCreateWithoutPersonInputSchema } from './PrivateTagCreateWithoutPersonInputSchema';
import { PrivateTagUncheckedCreateWithoutPersonInputSchema } from './PrivateTagUncheckedCreateWithoutPersonInputSchema';

export const PrivateTagUpsertWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PrivateTagUpsertWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PrivateTagUpdateWithoutPersonInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPersonInputSchema) ]),
  create: z.union([ z.lazy(() => PrivateTagCreateWithoutPersonInputSchema),z.lazy(() => PrivateTagUncheckedCreateWithoutPersonInputSchema) ]),
}).strict();

export default PrivateTagUpsertWithWhereUniqueWithoutPersonInputSchema;
