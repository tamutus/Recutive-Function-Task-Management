import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagWhereUniqueInputSchema } from './PrivateTagWhereUniqueInputSchema';
import { PrivateTagUpdateWithoutPersonInputSchema } from './PrivateTagUpdateWithoutPersonInputSchema';
import { PrivateTagUncheckedUpdateWithoutPersonInputSchema } from './PrivateTagUncheckedUpdateWithoutPersonInputSchema';

export const PrivateTagUpdateWithWhereUniqueWithoutPersonInputSchema: z.ZodType<Prisma.PrivateTagUpdateWithWhereUniqueWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PrivateTagUpdateWithoutPersonInputSchema),z.lazy(() => PrivateTagUncheckedUpdateWithoutPersonInputSchema) ]),
}).strict();

export default PrivateTagUpdateWithWhereUniqueWithoutPersonInputSchema;
