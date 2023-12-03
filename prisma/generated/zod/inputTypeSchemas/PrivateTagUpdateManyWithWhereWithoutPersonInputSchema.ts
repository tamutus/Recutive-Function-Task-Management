import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagScalarWhereInputSchema } from './PrivateTagScalarWhereInputSchema';
import { PrivateTagUpdateManyMutationInputSchema } from './PrivateTagUpdateManyMutationInputSchema';
import { PrivateTagUncheckedUpdateManyWithoutPersonInputSchema } from './PrivateTagUncheckedUpdateManyWithoutPersonInputSchema';

export const PrivateTagUpdateManyWithWhereWithoutPersonInputSchema: z.ZodType<Prisma.PrivateTagUpdateManyWithWhereWithoutPersonInput> = z.object({
  where: z.lazy(() => PrivateTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PrivateTagUpdateManyMutationInputSchema),z.lazy(() => PrivateTagUncheckedUpdateManyWithoutPersonInputSchema) ]),
}).strict();

export default PrivateTagUpdateManyWithWhereWithoutPersonInputSchema;
